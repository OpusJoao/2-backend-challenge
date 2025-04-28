SELECT 
    email,
    COUNT(*) AS quantas_vezes
FROM 
    users
GROUP BY 
    email
HAVING 
    quantas_vezes > 1
ORDER BY 
    quantas_vezes DESC;