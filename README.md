# calculator
for each operation, we need three pieces-first operand, an operator, a second operand- in order to complete the operation, and since each piece can either be present or absent, we have 8(2^3)only four of them are elligible cases, and they are as follows:
1) first operand is missing: here we can't accept any operators
2) first operand is present: here we can accept an operator
3) we have a first operand but we still didn't specify an operator: we can continue modifying the first operand but we can't add a second operand
4) we specified an operand and an operator: here we can clear the screen and start modifying the second operand
