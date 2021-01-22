<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Dan
        <span class="text-primary">Hunt</span>
      </h1>
      <div class="subheading mb-5">
        Livonia, MI 48152 · (313) 445-4197 ·
        <a
          href="mailto:dkhunt27@gmail.com"
        >dkhunt27@gmail.com</a>
      </div>
      <p class="lead mb-5"> 
        A full stack .Net and Javascript software engineer with more than 15 years of professional experience who advocates for cloud technologies.
        I am experienced in the development of and the management of technical solutions from concept to delivery.
        I am an excellent troubleshooter – able to analyze code and engineer well-researched, cost-effective, and responsive solutions.
        I am well-versed in development methodologies, tools, and processes contributing to the design and rollout of cutting-edge software applications. 
      </p>
      <div class="social-icons">
        <a href="https://linkedin.com/in/dkhunt27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/dkhunt27" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://danhunt.dev" target="_blank" rel="noopener noreferrer" aria-label="DanHunt.dev">
          <font-awesome :icon="['fas', 'rss']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
