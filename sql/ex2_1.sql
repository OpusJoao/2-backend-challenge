SELECT 
    product AS produto,
    SUM(quantity) as quantidade,
    price as preco,
    SUM(quantity * price) as receita_total
FROM 
    sales
GROUP by product
ORDER BY receita_total desc