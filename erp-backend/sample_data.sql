-- Insert sample employees
INSERT INTO employees (employee_code, emp_code, first_name, last_name, email, hire_date, department, position) VALUES
    ('EMP001', 'EMP001', 'John', 'Doe', 'john.doe@example.com', CURRENT_DATE - INTERVAL '6 months', 'Engineering', 'Software Engineer'),
    ('EMP002', 'EMP002', 'Jane', 'Smith', 'jane.smith@example.com', CURRENT_DATE - INTERVAL '1 year', 'HR', 'HR Manager'),
    ('EMP003', 'EMP003', 'Michael', 'Johnson', 'michael.j@example.com', CURRENT_DATE - INTERVAL '3 months', 'Sales', 'Sales Representative'),
    ('EMP004', 'EMP004', 'Sarah', 'Williams', 'sarah.w@example.com', CURRENT_DATE - INTERVAL '2 years', 'Marketing', 'Marketing Director'),
    ('EMP005', 'EMP005', 'David', 'Brown', 'david.b@example.com', CURRENT_DATE - INTERVAL '1 month', 'Engineering', 'Frontend Developer')
ON CONFLICT (employee_code) DO NOTHING;

-- Insert sample punch data for today and yesterday
WITH dates AS (
    SELECT generate_series(
        CURRENT_DATE - INTERVAL '1 day',
        CURRENT_DATE,
        '1 day'::interval
    )::date AS day
)
INSERT INTO punch_data (emp_code, punch_time, punch_type)
SELECT 
    e.emp_code,
    (d.day + time_offset)::timestamp,
    punch_type
FROM employees e
CROSS JOIN dates d
CROSS JOIN (
    VALUES 
        (TIME '09:00', 'IN'),
        (TIME '13:00', 'OUT'),
        (TIME '14:00', 'IN'),
        (TIME '18:00', 'OUT')
) AS t(time_offset, punch_type)
WHERE e.emp_code IN ('EMP001', 'EMP002', 'EMP003', 'EMP004', 'EMP005')
ORDER BY e.emp_code, d.day, time_offset;

-- Add some variations (late arrivals, early departures)
INSERT INTO punch_data (emp_code, punch_time, punch_type) VALUES
    ('EMP001', CURRENT_DATE + TIME '09:15', 'IN'),
    ('EMP001', CURRENT_DATE + TIME '17:45', 'OUT'),
    ('EMP003', CURRENT_DATE - INTERVAL '1 day' + TIME '09:30', 'IN'),
    ('EMP003', CURRENT_DATE - INTERVAL '1 day' + TIME '18:15', 'OUT'),
    ('EMP004', CURRENT_DATE + TIME '08:45', 'IN'),
    ('EMP004', CURRENT_DATE + TIME '18:30', 'OUT')
ON CONFLICT DO NOTHING;