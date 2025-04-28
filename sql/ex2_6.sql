CREATE VIEW monthly_summary AS
SELECT 
    account_id,
    MONTH(transaction_date) AS month,
    SUM(amount) AS total_amount,
    COUNT(*) AS transaction_count
FROM 
    transactions
GROUP BY 
    account_id, MONTH(transaction_date);