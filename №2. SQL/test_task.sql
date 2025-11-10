SET STATISTICS TIME ON;

WITH RecursiveSubdivisions AS (
    SELECT 
        s.id,
        s.name,
        s.parent_id,
        0 AS sub_level 
    FROM subdivisions s
    INNER JOIN collaborators c ON s.id = c.subdivision_id
    WHERE c.id = 710253 
    
    UNION ALL
    

    SELECT 
        s.id,
        s.name, 
        s.parent_id,
        rs.sub_level + 1 
    FROM subdivisions s
    INNER JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
    WHERE s.id NOT IN (100055, 100059) 
),
EmployeeCounts AS (
    SELECT 
        subdivision_id,
        COUNT(*) AS colls_count
    FROM collaborators
    GROUP BY subdivision_id
)
SELECT 
    c.id,
    c.name,
    s.name AS sub_name,
    s.id AS sub_id,
    s.sub_level,
    ec.colls_count
FROM collaborators c
INNER JOIN RecursiveSubdivisions s ON c.subdivision_id = s.id
INNER JOIN EmployeeCounts ec ON c.subdivision_id = ec.subdivision_id
WHERE c.age < 40  
ORDER BY s.sub_level ASC; 

SET STATISTICS TIME OFF;