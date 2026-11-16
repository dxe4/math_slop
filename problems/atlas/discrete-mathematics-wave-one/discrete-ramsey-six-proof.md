# The exact value R(3,3)

*Difficulty 4 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 12 of 15*

Prove R(3,3)=6. Your solution must include an upper-bound forcing argument and an explicit two-coloring on five vertices for the lower bound.

<details>
<summary>Hint 1</summary>

At one vertex of K6, three incident edges share a color

</details>

<details>
<summary>Hint 2</summary>

Color a five-cycle red and its complement blue

</details>

<details>
<summary>Worked solution</summary>

For K6, choose vertex v. Among five incident edges, at least three have one color, say va,vb,vc are red. If any edge among a,b,c is red, it forms a red triangle with v; otherwise all three are blue and form a blue triangle. Thus every coloring has a monochromatic triangle and R(3,3)≤6. For K5, color a five-cycle red and the remaining five edges blue. The blue graph is also a five-cycle, so neither color contains a triangle. Hence R(3,3)>5, and equality follows.

**Answer.** The majority argument gives ≤6; complementary five-cycles give >5; therefore R(3,3)=6.

</details>

*Tags: ramsey, extremal-combinatorics, proof*
