<template>
    <div class="app text-sm leading-relaxed inter-regular">
      <div data-scene data-speed="1.0" class="flex flex-col min-h-screen p-24">
        <div class="grow">
          <div class="flex justify-between mb-24 inter-medium uppercase">
            <div>Wouter Haringsma — Resume <Wave /></div>
            <div>{{ currentYear }}</div>
        </div>
          <div class="flex">
            <div class="grow w-1/2">In short →</div>
            <div class="grow w-2/3">I'm a venturous Bachelor's graduate with a love for human-centred product design and in search of a new challenge. I have six years of combined relevant experience, including working on large scale business-to-business and business-to-consumer applications, agile work environments, setting up design systems and improving design processes, and leading multidisciplinary projects.</div>
          </div>
        </div>
        <div class="flex">
          <div class="mr-24">Go Deep ↓</div>
          <div>~~~~~~~</div>
        </div>
      </div>
      <div data-scene data-speed="1.0" class="flex flex-col min-h-screen p-24">
        <div>
          <h2 class="mb-12 text-9xl inter-semibold tracking-tighter">Personal</h2>
        </div>
        <div class="flex mb-6">
          <div class="flex flex-col w-1/4 mr-12">
            <ul>
              <li>Name:</li>
              <li>Date of birth:</li>
              <li>Nationality:</li>
              <li>Adress:</li>
            </ul>
          </div>
          <div class="flex flex-col w-3/4">
            <ul>
              <li>Wouter Haringsma</li>
              <li>10-03-1994</li>
              <li>Dutch</li>
              <li>Dwarsvaartweg 11,<br /> 8388 MH Oosterstreek</li>
            </ul>
          </div>
        </div>
        <div class="flex mb-12 z-50">
          <div class="flex flex-col w-1/4 mr-12">
            <ul>
              <li>Phone:</li>
              <li>Email:</li>
              <li>LinkedIn:</li>
            </ul>
          </div>
          <div class="flex flex-col w-3/4">
            <ul>
              <li>(+31) 06 83962402</li>
              <li>wouterharingsma@icloud.com</li>
              <li><a href="https://linkedin.com/in/haringsmawouter" target="_blank" class="text-blue-600 hover:underline">www.linkedin.com/in/haringsmawouter</a></li>
            </ul>
          </div>
        </div>
        <div class="flex w-full p-48 text-center bg-stone-100 rounded-lg">
          <span class="w-full text-xs uppercase">Less but better — Dieter rams</span>
        </div>
      </div>
      <div data-scene data-speed="0.3" class="absolute right-12"><span class="text-[240px]">↓</span></div>
      <div data-scene data-speed="1.0" class="flex flex-col min-h-screen p-24 bg-white">
        <div><h2 class="mb-12 text-9xl font-semibold tracking-tighter">Work</h2></div>
        <div class="flex mb-24">
          <div class="grow w-2/5 mr-24">
            <ul>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2023-2024</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">Junction</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">UX Designer/Marketing Lead</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Leeuwarden</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Fulltime</li>
            </ul>
          </div>
          <div class="grow w-3/5"><p class="block italic mb-4">A full-service agency, specialized in creative and digital solutions for </p></div>
        </div>
        <div class="flex mb-24">
          <div class="grow w-2/5 mr-24">
            <ul>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2022-2023</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">Reconcept</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">UX Designer</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Groningen</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Fulltime</li>
            </ul>
          </div>
          <div class="grow w-3/5"><p class="block italic mb-4">A portfolio application that is used to validate and document progress, at the time used by medical students and shipped to more than 60% of all the hospitals in the Netherlands.</p><p>At Reconcept, a self-sustaining and freshly transitioned scale-up, I performed as the principal designer for their new product department. In collaboration with the CPO, I have set up and led the creation of all intial design processes. This included a structured handoff with the developer department and an agile design system that actively collaborated with the business and marketing department in terms of vision and content. Additionally, in collaboration with NHL Stenden University of Applied Sciences, I initiated an intern program to support the new generation of designers and developers, and started enhancing the features of the application on a conceptual level to prepare it for scalability, new markets and an overall better user experience.</p></div>
        </div>
        <div class="flex mb-24">
          <div class="grow w-2/5 mr-24">
            <ul>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2020-2022</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">Yobbers</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">UX Designer</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Leeuwarden</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Fulltime</li>
            </ul>
          </div>
          <div class="grow w-3/5"><p class="block italic mb-4">A platform for working abroad, offering full service and guidance throughout the whole process, and at the time successfully used by more than thousands of jobseekers a year.</p><p>At Yobbers, a holacratic and investor-backed scale-up, I performed autonomously as the lead designer for their in-house applicant tracking system. I was also the project lead and researcher for the community framework within the jobseeker platform — which was in a multidisciplinary pre-development phase at that time and oriented around ethical gamification. Additionally, I was responsible for the conversion rate optimization and the person of contact for internal feedback regarding the platform and applications.</p></div>
        </div>
        <div class="flex mb-24">
          <div class="grow w-2/5 mr-24">
            <ul>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2019-2021</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">Ik Sport</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Personal Trainer</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Noordwolde</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Parttime</li>
            </ul>
          </div>
          <div class="grow w-3/5"><p>In a journey to better myself in terms of guidance and peer assessing, I started a study in fitness and joined the Ik Sport gym as an intern. During this period, I eventually got my licence and worked my way up as a parttime instructor and personal trainer. I guided more than ten individuals, with a diverse set of goals, each for at least a year straight, and also lead the troubleshooting during the COVID-19 pandemic.</p></div>
        </div>
        <div class="flex mb-24">
          <div class="grow w-2/5 mr-24">
            <ul>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2012-2013</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">Rocket Science Retail</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">UX Designer/Front-end Developer</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Deventer</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Internship</li>
            </ul>
          </div>
          <div class="grow w-3/5"><p>For my second internship, I joined Rocket Science Retail, a design agency that worked in-house for Morgana, a high-end store focused on healthy sleeping, and their POS application. My work primarily consisted of redesigning and preparing the POS application for scalability and a public SaaS release. Alongside the POS project, I collaborated with other designers and developers on multiple static and WordPress powered websites for other clients, including a platform for renting wedding venues.</p></div>
        </div>
        <div class="flex">
          <div class="grow w-2/5 mr-24">
            <ul>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2011-2012</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">John Max</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">UX Designer/Front-end Developer</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Staphorst</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Internship</li>
            </ul>
          </div>
          <div class="grow w-3/5"><p>I joined the John Max agency as a hybrid UX Designer and Front-end Developer on an internship base for their long term project with KB, the national library of the Netherlands. Together with two other designers, and in collaboration with external developers, I worked full-time on a digital magazine that would ship each month to every member of a public library. The magazine included interviews, overviews of new books, articles that highlighted local news or events, and short stories. One of the primary focus points of the project was to blend modern digital usability with analogue nostalgia and recognizability. Additionally, after finishing the final designs for the digital magazine, I designed and developed a new static website for John Max as a post-internship freelance project.</p></div>
        </div>
      </div>
      <div data-scene data-speed="1.0" class="p-24">
        <div><h2 class="mb-12 text-9xl font-semibold tracking-tighter">Projects</h2></div>
        <div class="flex">
          <div class="grow w-2/5 mr-24">
            <ul>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2023-today</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">Emaly</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Full-stack Developer</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Leeuwarden</li>
              <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Parttime</li>
            </ul>
          </div>
          <div class="grow w-3/5"><p class="block italic mb-4">Lorem.</p><p>Lorem.</p></div>
        </div>
      </div>
      <div data-scene data-speed="1.0" class="p-24">
        <div><h2 class="mb-12 text-9xl font-semibold tracking-tighter">Education</h2></div>
        <div>
          <div class="mb-6">
            <ul>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2017-2021</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">B.Sc. Communication & Multimedia Design</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">NHL Stenden University of Applied Sciences</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-3 border border-black">Leeuwarden</li>
            <li class="block">→ Minors: The Next Web, Conceptual Thinking, and Entrepreneurship.</li>
          </ul>
        </div>
        <div class="mb-6">
            <ul>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2019-2020</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">Fitness A (Instructor) and B (Personal Trainer)</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Fitness Educatie Noord</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-3 border border-black">Leeuwarden</li>
            <li class="block">→ Specialisation: Personal Guidance, and Peer Assesing.</li>
          </ul>
        </div>
        <div>
            <ul>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">2010-2014</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 bg-blue-700 text-white">MBO Mediavormgeving</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-1.5 border border-black">Friesland College</li>
            <li class="inline-block rounded-full px-4 py-2 mr-1.5 mb-3 border border-black">Heerenveen</li>
            <li class="block">→ Specialisation: Interactive Design.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
const currentYear = ref(new Date().getFullYear())

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<style scoped>
/* [data-scene] {
    padding: 10vh 50px;
    margin: 10vh auto;
  } */

  /* [data-scene]:first-child {
    background: linear-gradient(to bottom, rgb(168, 192, 255), rgb(63, 43, 150));
  } */

  /* [data-scene]:last-child {
    margin-bottom: 50vh;
  } */
  </style>