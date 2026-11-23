
---
permalink: /
title: "About me"
excerpt: "Development economist specialising in informality, labour markets, poverty and public policy in Southern Africa."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="mz-tagline">My research in Southern Africa focuses on <span class="mz-type" id="mz-type">informality</span><span class="mz-cursor" aria-hidden="true"></span></p>

I am a development economist specialising in labour markets, informality, poverty and development policy in sub-Saharan Africa. I recently defended my PhD dissertation, *Informality, Labour Market Dynamics and Poverty in Zimbabwe*, at [Stellenbosch University](https://www.sun.ac.za/english/faculty/economy) on 22 October 2026 and am completing the final corrections. Supervised by [Dr Eldridge Moses](https://www.ekon.sun.ac.za/staff/moses-eldridge) and [Dr Kholekile Malindi](https://www.ekon.sun.ac.za/staff/malindi-kholekile), my doctoral research examines three interconnected dimensions of informality. These are the relationship between informal employment and household poverty, productivity differences among informal enterprises in Zimbabwe and South Africa, and transitions between informal and formal employment.

I teach macroeconomics, econometrics and game theory in the Department of Economics at Stellenbosch University. I am affiliated with the [Research on Socio-Economic Policy (RESEP)](https://resep.sun.ac.za/) research unit and am a member of the [Econometric Society](https://www.econometricsociety.org/) and the [Zimbabwe Economics Society](https://zesociety.org/). My broader research interests include labour-market dynamics, informal enterprises, public finance, social protection, poverty dynamics and economic development. I also hold Master's and Honours degrees in Economics from the [University of Zimbabwe](https://www.uz.ac.zw/), where my master's dissertation was supervised by [Dr Pheneas Kadenge](https://www.uz.ac.zw/index.php/social-studies-departments/234-department-of-economics/economics-staff/528-dr-pheneas-kadenge).

Before pursuing my doctoral studies, I worked as an Economist at the [Southern African Parliamentary Support Trust (SAPST)](https://www.sapst.org/), where I analysed national budgets, public policies and proposed legislation to support parliamentary oversight and evidence-based policymaking. I also served as a Policy Consultant on domestic resource mobilisation for the [African Forum and Network on Debt and Development (AFRODAD)](https://www.afrodad.org/) and as a Statistician at the [Zimbabwe National Statistics Agency (ZIMSTAT)](https://zimstat.co.zw/). At ZIMSTAT, my work involved survey design, data quality assurance and the processing of household and labour-force statistics.

Alongside my academic research, I provide consultancy and policy advisory services in social protection, public finance and development policy across Southern Africa. My recent work includes parliamentary oversight of public loans in SADC countries, public expenditure analysis relating to early childhood development, and an assessment of psychosocial support financing across six SADC countries. These projects have involved collaboration with [Prof Albert Makochekanwa](https://esami-africa.org/global-faculty-profiles/albert-makochekanwa/), [Chengetai Madziwa-Kanyangu](https://southernafricatrust.org/team/chengetai-madziwa-kanyangu/), [Rangarirai Chikova](https://www.lawyersofafrica.org/about/palu-secretariat/) and [Dr Michael Takudzwa Pasara](https://commerce.nwu.ac.za/economic-and-management-sciences/michael-takudzwa-pasara).

My research combines applied microeconometrics with household surveys, enterprise surveys and administrative data. I work with cross-sectional, panel and synthetic-panel methods, including limited dependent variable models, decomposition techniques and labour-market transition analysis. I am an advanced Stata user, also work in R, and am developing my Python skills for data science and large-scale data analysis. For qualitative research, I use NVivo and ATLAS.ti.

<script>
(function () {
  var el = document.getElementById('mz-type');
  if (!el) return;

  var words = [
    'informality',
    'labour markets',
    'poverty dynamics',
    'social protection',
    'development policy'
  ];

  // Respect reduced-motion accessibility preferences.
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    el.textContent = words[0];
    return;
  }

  var wi = 0;
  var ci = words[0].length;
  var deleting = false;

  function tick() {
    var word = words[wi];

    if (!deleting) {
      if (ci < word.length) {
        ci++;
        el.textContent = word.slice(0, ci);
        setTimeout(tick, 70);
      } else {
        deleting = true;
        setTimeout(tick, 1800);
      }
    } else {
      if (ci > 0) {
        ci--;
        el.textContent = word.slice(0, ci);
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
