SELECT 
    c.name AS cliente,
    SUM(o.total) AS total_compras
FROM 
    customers c
JOIN 
    orders o ON c.id = o.customer_id
GROUP BY 
    c.id
ORDER BY 
    total_compras DESC;