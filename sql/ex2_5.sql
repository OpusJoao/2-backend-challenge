SELECT 
    cat.name AS categoria,
    p.name AS produto,
    SUM(s.quantity) AS quantidade_vendida
FROM 
    categories cat
JOIN 
    products p ON cat.id = p.category_id
JOIN 
    sales s ON p.id = s.product_id
GROUP BY 
    cat.id, p.id
HAVING 
    SUM(s.quantity) > 100
ORDER BY 
    quantidade_vendida DESC;