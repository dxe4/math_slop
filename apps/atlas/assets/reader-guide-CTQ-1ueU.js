var e=`---
parent_id: book-time-series
chapter_id: reader-guide
title: Reader Guide, Data and R Conventions
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Reader Guide, Data and R Conventions

Read the chapters in order for a first pass. Chapters 1–2 establish the time index and covariance language. Chapters 3–6 use that language for ARMA estimation and forecasting; Chapters 7–12 extend it to frequency, state, variance, multiple series, memory, change and case studies. The text uses American spelling. It keeps a distinction between a population random process X_t and an observed finite vector x_1,...,x_n.

One time step means one declared observation interval. A quarterly series with period four has four positions per annual cycle; a spectral frequency is measured in cycles per step. Our ARMA convention is phi(B)Y_t=theta(B)epsilon_t, with phi(z)=1-phi_1z-... and theta(z)=1+theta_1z+.... Variance means a squared-unit second moment. An innovation has mean zero and variance sigma² when those assumptions are stated; uncorrelated innovations are not automatically independent.

Every numeric teaching vector and table is source-owned illustrative data authored for Euler under CC BY-SA 4.0. These values are synthetic and have no external population, sampling design or implied empirical claim. R listings use base R or its standard \`stats\` package and include their own inputs. They are inert source examples during the current authoring pass: no output or numerical fit is claimed to have been executed. A reader using fresh R can copy a complete listing; numerical conclusions in prose are independently explained by hand calculations.

Keep source order when evaluating forecasts. For an origin n, only information through n may enter transformations, model selection and parameter fitting. A worked example may use known parameters to expose a formula; a real analysis must account for estimation and model uncertainty separately. “Draft” means the chapter meets the source manuscript floor, not that it has received independent mathematical review.
`;export{e as default};