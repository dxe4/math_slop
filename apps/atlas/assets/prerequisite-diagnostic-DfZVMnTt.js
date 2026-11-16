var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: prerequisite-diagnostic
title: "Preparation Diagnostic"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Preparation Diagnostic

Use these questions to locate preparation worth revisiting. They are a reading aid, with complete explanations immediately below each question.

## Orientation

A disk in the $xy$ plane has normal $+\\hat z$. Which direction is positive around its boundary when viewed from above?

The positive direction is counterclockwise. The right-hand rule makes a counterclockwise tangent and the inward direction along the surface agree with the upward normal. If the normal is reversed, the boundary direction must also reverse. An integral theorem compares a matched pair of orientations, rather than declaring one direction positive without a surface.

## A scalar potential

Find a potential for $E=(2x,2y,2z)$ on all of space under the convention $E=-\\nabla\\phi$.

Take $\\phi=-(x^2+y^2+z^2)+C$. Differentiating produces the given components after the minus sign. The arbitrary constant does not change the field. This answer is global because the polynomial is defined everywhere; it does not establish a global potential theorem on a punctured domain.

## A divergence calculation

For $F=(x,y,z)$, find the outward flux through a sphere of radius $R$ centered at the origin.

The divergence is three, so the divergence theorem gives flux $3(4\\pi R^3/3)=4\\pi R^3$. Equivalently the field has constant outward normal component $R$ on the sphere and area $4\\pi R^2$. Agreement of these two derivations is a useful orientation check; both require the field to be regular inside the sphere, which it is here.

## Local and global information

Does zero curl always imply zero circulation on every closed curve?

No. On the plane with the origin removed, $F=(-y,x)/(x^2+y^2)$ has zero curl but circulation $2\\pi$ on a positively oriented unit circle. A global single-valued potential would make every such circulation vanish. The missing point obstructs contracting that loop inside the domain. The first chapter derives this example and separates the local derivative identity from the global conclusion.

## Energy and momentum

A particle has velocity $v$ and force $F$. Why does $F\\cdot v$ appear in a work balance, and why does a magnetic force do no instantaneous mechanical work?

The work along a displacement is $F\\cdot dx$; dividing by time gives $F\\cdot v$. For the magnetic contribution $qv\\times B$, the cross product is perpendicular to $v$, so its dot product with $v$ is zero. This is a statement about the magnetic part of the Lorentz force, not a claim that time-dependent electromagnetic systems cannot transfer energy.

## A chain rule

Let $g(t)=f(t-R/c)$ for fixed positive distance $R$. Find $g'(t)$ and the derivative with respect to $R$ at fixed $t$.

The time derivative is $f'(t-R/c)$. The distance derivative is $-f'(t-R/c)/c$. That second minus sign matters in retarded fields: moving the observation point changes both geometric factors and the retarded source time. When $R$ itself depends on a moving source trajectory, the chain rule acquires another implicit factor, which is derived in the radiation chapter.
`;export{e as default};