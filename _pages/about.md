---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
<p class="mz-tagline">Research on <span class="mz-type" id="mz-type">informality</span><span class="mz-cursor"></span><br><span class="mz-sub">in Southern Africa</span></p>

I am a development economist completing a [PhD in Economics at Stellenbosch University](https://www.sun.ac.za/english/faculty/economy). My dissertation, *Informality, Labour Market Dynamics and Poverty in Zimbabwe*, looks at informal sector dynamics, productivity gaps, and the survival strategies of workers and households. It is supervised by [Eldridge Moses](https://www.ekon.sun.ac.za/staff/moses-eldridge) and [Kholekile Malindi](https://www.ekon.sun.ac.za/staff/malindi-kholekile). I teach macroeconomics, econometrics and game theory in the Department of Economics at Stellenbosch, and I am a member of the [Research on Socio-Economic Policy (RESEP)](https://resep.sun.ac.za/) unit, the [Econometric Society](https://www.econometricsociety.org/), and the Zimbabwe Economics Society. My research interests span labour markets, the informal sector, public finance, social protection, and poverty dynamics in sub-Saharan Africa. I hold a Master's and an Honours degree in Economics from the [University of Zimbabwe](https://www.uz.ac.zw/), where my master's dissertation was supervised by [Pheneas Kadenge](https://www.uz.ac.zw/index.php/social-studies-departments/234-department-of-economics/economics-staff/528-dr-pheneas-kadenge).

Before my doctoral studies I worked as an Economist at the [Southern African Parliamentary Support Trust (SAPST)](https://www.sapst.org/), analysing national budgets, public policies, and proposed legislation for Parliamentarians. I served as a Policy Consultant on domestic resource mobilisation for the [African Forum and Network on Debt and Development (AFRODAD)](https://www.afrodad.org/), and as a Statistician at the [Zimbabwe National Statistics Agency (ZIMSTAT)](https://zimstat.co.zw/), where I worked on survey design, data quality control, and processing of household and labour force statistics. I also provide consultancy and advisory services on social protection, public finance, and development policy in Southern Africa. Recent projects cover parliamentary oversight of loans in SADC countries, budget expenditure analysis on early childhood development, and psychosocial support funding across six SADC countries, carried out with [Albert Makochekanwa](https://esami-africa.org/global-faculty-profiles/albert-makochekanwa/), [Chengetai Madziwa-Kanyangu](https://southernafricatrust.org/team/chengetai-madziwa-kanyangu/), [Rangarirai Chikova](https://www.lawyersofafrica.org/about/palu-secretariat/) and [Michael Takudzwa Pasara](https://commerce.nwu.ac.za/economic-and-management-sciences/michael-takudzwa-pasara).

I work with household survey and administrative data, using applied microeconometrics on cross-sectional, panel and synthetic panel data. I am an advanced Stata user and also work in R, and I use NVivo and Atlas.ti for qualitative research.

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
