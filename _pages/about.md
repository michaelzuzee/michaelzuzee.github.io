---
permalink: /
title: "About me"
excerpt: "About me"
layout: single
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="mz-tagline">My research in Southern Africa focuses on <span class="mz-type" id="mz-type">informality</span><span class="mz-cursor"></span></p>

I am an applied development microeconomist specialising in labour markets, informality, enterprise productivity and poverty dynamics in sub-Saharan Africa. My research uses household, labour-force and enterprise survey microdata to examine economic opportunities, inequality and household welfare.

I successfully defended my doctoral thesis in Economics at [Stellenbosch University](https://www.sun.ac.za/english/faculty/economy) on 22 October 2026. My dissertation, *Informality, Labour Market Dynamics and Poverty in Zimbabwe*, examines the relationship between informal employment and household poverty, productivity gaps in informal enterprises in Zimbabwe and South Africa, and labour-market mobility. My supervisors are [Dr Eldridge Moses](https://www.ekon.sun.ac.za/staff/moses-eldridge) and [Dr Kholekile Malindi](https://www.ekon.sun.ac.za/staff/malindi-kholekile). I hold an MSc and a BSc (Honours) in Economics from the [University of Zimbabwe](https://www.uz.ac.zw/).

**[Download my CV (PDF)](/files/Michael_cv.pdf)** | [Research](/publications/) | [Policy & Consultancy](/consultancy/)

## Research

My research interests include development economics, labour-market dynamics, entrepreneurship, structural transformation, poverty, inequality and social protection. I am also interested in responsible data-driven approaches to economic measurement and policy targeting in data-constrained environments.

I use applied microeconometrics, cross-sectional and panel analysis, synthetic-panel methods, survey-weighted estimation and distributional analysis. My technical toolkit includes advanced Stata, R, LaTeX, NVivo and ATLAS.ti.

## Policy and professional experience

Before my doctoral studies, I worked as an Economist at the [Southern African Parliamentary Support Trust (SAPST)](https://www.sapst.org/), a Policy Consultant at the [African Forum and Network on Debt and Development (AFRODAD)](https://www.afrodad.org/), and a Statistician at the [Zimbabwe National Statistics Agency (ZIMSTAT)](https://zimstat.co.zw/). I also worked as a Research Assistant at the University of Zimbabwe.

Since 2018, my regional consultancy assignments have covered public expenditure, education financing, psychosocial support budgets and parliamentary oversight of public debt across the Southern African Development Community. My work combines quantitative analysis with policy briefs and practical evidence for decision-makers.

## Teaching and academic affiliations

I have taught undergraduate economics at Stellenbosch University, Marondera University of Agricultural Sciences and Technology, and the University of Zimbabwe. My teaching experience includes Macroeconomics, Econometrics and Game Theory.

I am a member of [Research on Socio-Economic Policy (RESEP)](https://resep.sun.ac.za/) at Stellenbosch University, the [Econometric Society](https://www.econometricsociety.org/membership/directory/view/Michael-Zuze-NOK1X1), the [Zimbabwe Economics Society](https://zesociety.org/) and the Young Scholars Initiative, and an associate member of the [African Studies Centre Leiden community](https://ascleiden.nl/content/ASC-community/members/michael-zuze).

For research collaboration, policy analysis or consultancy enquiries, please use the contact details in my author profile.

<script>
(function () {
  var el = document.getElementById('mz-type');
  if (!el) return;
  var words = ['informality', 'labour markets', 'poverty dynamics', 'social protection'];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var wi = 0;
  var ci = words[0].length;
  var deleting = false;
  function tick() {
    var w = words[wi];
    if (!deleting) {
      if (ci < w.length) {
        ci++;
        el.textContent = w.slice(0, ci);
        setTimeout(tick, 70);
      } else {
        deleting = true;
        setTimeout(tick, 1800);
      }
    } else {
      if (ci > 0) {
        ci--;
        el.textContent = w.slice(0, ci);
        setTimeout(tick, 35);
      } else {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(tick, 350);
      }
    }
  }
  tick();
})();
</script>
