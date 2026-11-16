
# Prerequisite Diagnostic

Try these five prompts. (1) Why does a quotient ring require an ideal? (2) Why is k[x]/(f) a field for irreducible f? (3) What is the ideal (a)+(b) in Z? (4) Why is (x,y) not principal in k[x,y]? (5) When does an R-map from a free module descend through its relations?

<details>
<summary>Worked answers and repair route</summary>

1. Replacing a,b by a+i,b+j changes their product by aj+ib+ij. Ideal absorption keeps that difference inside the ideal, making multiplication independent of representatives. An arbitrary additive subgroup does not suffice.

2. Euclid gives uf+vg=1 when f does not divide a nonzero representative g. Thus the class of v inverts the class of g. The quotient is nonzero because (f) is proper. Repair the polynomial Euclidean algorithm.

3. It is the set of integer combinations ma+nb, equal to gcd(a,b)Z. Bezout proves the gcd belongs to the sum, and divisibility proves the reverse inclusion.

4. A common polynomial divisor of x and y must be a unit, so a principal generator would make the ideal the whole ring. But evaluation at (0,0) kills the ideal and sends 1 to 1, so it is proper.

5. A map from R^n descends to R^n/N exactly when N lies in its kernel. Its values on the standard basis determine the map, and the relations must map to zero. Repair quotient modules and homomorphism factorisation before working with presentations.

</details>
