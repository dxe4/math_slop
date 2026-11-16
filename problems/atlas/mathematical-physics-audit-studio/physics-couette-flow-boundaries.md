# Couette flow is an equation plus boundaries

*Difficulty 4 of 5 · [Mathematical physics audit studio](index.md) · exercise 7 of 10*

An incompressible Newtonian fluid of viscosity μ lies between infinite plates $y=0$ and $y=h$. The lower plate is fixed, the upper moves at speed U in x, pressure gradient and body force vanish, and flow is steady and unidirectional $v=(u(y),0,0)$. Derive u(y), shear stress, and dissipation per unit volume, with units.

<details>
<summary>Hint 1</summary>

The x-momentum equation reduces to $\mu u''=0$

</details>

<details>
<summary>Hint 2</summary>

Use no-slip values $u(0)=0$ and $u(h)=U$

</details>

<details>
<summary>Hint 3</summary>

For this flow $2\mu D:D=\mu(du/dy)^2$

</details>

<details>
<summary>Worked solution</summary>

Momentum gives $\mu u''=0$, so $u=Ay+B$. No slip yields $B=0$ and $A=U/h$, hence $u(y)=Uy/h$. The symmetric Newtonian shear is $\tau_{xy}=\mu\,du/dy=\mu U/h$, constant across the gap. Viscous dissipation per volume is $2\mu D{:}D=\mu(U/h)^2$. Dynamic viscosity has units Pa·s; multiplying by $U/h$ in $\mathrm{s}^{-1}$ gives stress Pa, and multiplying by the squared rate gives $\mathrm{Pa/s}=\mathrm{W/m^3}$. Slip walls or a pressure gradient would change the boundary data or equation and therefore the profile.

**Answer.** $u=Uy/h$, $\tau_{xy}=\mu U/h$, and dissipation density $\mu(U/h)^2\,\mathrm{W/m^3}$ under no slip and zero pressure gradient.

</details>

*Tags: fluid mechanics, Navier-Stokes, boundary conditions, dissipation*
