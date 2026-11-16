var e=`---
id: visual-lab-stress-tensor
title: "Stress Tensor & Mohr Circle Laboratory"
level: advanced-undergraduate
estimated_minutes: 105
license: CC BY-SA 4.0
---

# Stress Tensor & Mohr Circle Laboratory

This dependency-free Canvas instrument connects a symmetric two-dimensional Cauchy stress tensor to the traction on a rotated material plane, its principal stresses, and its Mohr circle. Every visual claim is repeated through formulas and exact numerical tables.

Open [the live laboratory](#/labs?lab=visual-lab-stress-tensor), read [Fields and Continua](#/item/book-fields-fluids-continuum) for the balance laws, or use the [standard course](#/item/course-mathematical-physics-standard) for its place in mechanics and fluids.

## Assumptions and convention

The input tensor is

$\\sigma =[[\\sigma x,\\tau xy],[\\tau xy,\\sigma y]]$

in megapascals. Positive normal stress means tension. Symmetry $\\tau xy=\\tau yx$ follows from local angular-momentum balance for a classical Cauchy continuum without body couples. Generalized couple-stress or Cosserat media need additional variables and are outside this lab.

For plane unit normal

$n=(cos\\theta ,sin\\theta )$

and tangent

$t=(-sin\\theta ,cos\\theta )$,

traction is $\\sigma n$. Its signed components are

$\\sigma n_scalar=n\\cdot (\\sigma n)$,

$\\tau nt=t\\cdot (\\sigma n)$.

The lab’s Mohr vertical axis plots this $\\tau nt$. Some engineering conventions plot its negative, so apparent clockwise/counterclockwise differences across books may be convention rather than disagreement.

## Exact transformation

Let

$m=(\\sigma x+\\sigma y)/2$, $d=(\\sigma x-\\sigma y)/2$.

Then

$\\sigma n=m+d \\cos(2\\theta )+\\tau xy \\sin(2\\theta )$,

$\\tau nt=\\tau xy \\cos(2\\theta )-d \\sin(2\\theta )$.

Therefore

$(\\sigma n-m)^{2}+\\tau nt^{2}=d^{2}+\\tau xy^{2}=R^{2}$.

The Mohr radius is $R=\\sqrt{d^{2}+\\tau xy^{2}}$. Principal stresses are

$\\sigma _{1}=m+R$, $\\sigma _{2}=m-R$,

and principal planes have zero shear. Maximum in-plane shear magnitude equals $R$ and occurs on planes 45 degrees from principal planes.

## Controls and accessible route

1. Choose uniaxial tension, pure shear, equal biaxial stress, combined loading, or compression-and-shear.
2. Adjust $\\sigma x$, $\\sigma y$, and $\\tau xy$ with labelled native range controls. Their displayed values and accessible names include MPa.
3. Adjust plane-normal angle $\\theta$ from $-90^{\\circ}$ to $90^{\\circ}$ with the keyboard arrow keys or pointer.
4. Read selected traction, principal stresses, maximum shear, trace, determinant, principal angle, and plane-stress von Mises equivalent in tables.

The Canvas is a labelled static image. It is not a hidden interaction surface. Color is duplicated by labels, solid/dashed lines, arrow shapes, point markers, and numeric rows. There is no animation, so reduced-motion mode loses no state. If Canvas is unavailable, all controls and mathematical results remain.

## Preset audits

### Uniaxial tension

For $(\\sigma x,\\sigma y,\\tau xy)=(80,0,0) MPa$, principal stresses are $80$ and $0 MPa$. On a plane with $\\theta =45^{\\circ}$,

$\\sigma n=40 MPa$, $\\tau nt=-40 MPa$.

The sign comes from the chosen tangent orientation. Shear magnitude is $40 MPa$.

### Pure shear

For $(0,0,40) MPa$, principal stresses are $+40$ and $-40 MPa$ on axes rotated $45^{\\circ}$. Pure shear in one basis is tension/compression in a principal basis.

### Equal biaxial stress

For $(50,50,0) MPa$, $R=0$. Mohr’s circle collapses to one point; every plane has $\\sigma n=50 MPa$ and zero shear. The principal direction is not unique, so the engine reports a conventional angle zero.

### Combined loading

For $(90,30,25) MPa$,

$m=60 MPa$, $R=\\sqrt{1525}\\approx 39.051 MPa$,

so principal stresses are approximately $99.051$ and $20.949 MPa$. Their sum is trace $120 MPa$; their product is determinant $2075 MPa^{2}$.

## What is invariant?

Changing coordinates by orthogonal $Q$ gives

$\\sigma '=Q^T\\sigma Q$.

This is both a tensor basis transformation and an orthogonal similarity, so characteristic polynomial, trace, determinant, and eigenvalues remain. Normal and shear components change because the inspected plane changes.

The plane-stress von Mises equivalent displayed is

$\\sqrt{\\sigma x^{2}-\\sigma x\\sigma y+\\sigma y^{2}+3\\tau xy^{2}}$.

It is a scalar associated with a three-dimensional deviatoric-stress criterion under plane-stress assumption $\\sigma z=\\tau xz=\\tau yz=0$. Comparing it with a yield stress invokes an additional material model; the lab does not predict fracture, fatigue, anisotropic yielding, or safety factors.

## Diagnostic sequence

Use the lab as an audit rather than only as a picture:

1. Record the input tensor and its MPa units.
2. Predict whether the principal angle should lie clockwise or anticlockwise from the $x$ axis using the sign of $\\tau xy$ and $\\sigma x-\\sigma y$.
3. Move to the reported principal angle and demand shear zero up to rounding.
4. Add the two reported principal stresses and compare with $\\sigma x+\\sigma y$.
5. Multiply them and compare with $\\sigma x\\sigma y-\\tau xy^{2}$.
6. Rotate the plane by 90 degrees. Normal stresses should exchange and shear should reverse sign.
7. Rotate by 45 degrees from a principal plane. Shear magnitude should equal half the principal-stress difference.

If any check fails, first inspect angle and shear sign conventions. An $atan(\\tau /d)$ calculation can choose the wrong quadrant; the engine uses a two-argument angle and treats principal directions modulo 180 degrees. When the circle radius is zero, every direction is principal and any reported angle is conventional.

The Canvas scales arrows for visibility, so their screen length is not a calibrated stress ruler. Read numerical MPa values from the table. Likewise, an apparent intersection of drawn lines does not introduce a new material surface. Geometry explains relations; the table carries magnitude.

## Exercises with answers

**1. Orthogonal plane.** What happens at $\\theta +90^{\\circ}$?

**Answer.** Normal and tangent directions swap up to signs. $\\sigma n(\\theta +90^{\\circ})=\\sigma tt(\\theta )$ and $\\tau nt(\\theta +90^{\\circ})=-\\tau nt(\\theta )$ under the chosen tangent convention.

**2. Maximum shear.** Why does its magnitude equal half the principal-stress difference?

**Answer.** Mohr radius is $R$, while $\\sigma _{1}-\\sigma _{2}=2R$. Top and bottom of the circle have shear $\\pm R$.

**3. Nonsymmetric input.** Why does the lab not expose separate $\\tau xy,\\tau yx$ controls?

**Answer.** Its derivation assumes a symmetric classical Cauchy stress. A nonsymmetric tensor still has tractions, but orthogonal diagonalization, real principal axes, and the standard Mohr construction need not apply in the same way; the physical balance model must first be enlarged.

## Continue

Add three-dimensional stress and its three Mohr circles, transform strain, compare plane stress with plane strain, or attach a linear-elastic constitutive law. Preserve units, sign conventions, tensor symmetry hypotheses, and a numerical table at every extension.
`;export{e as default};