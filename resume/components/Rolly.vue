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
      <div data-scene data-speed="1.0" class="min-h-screen p-24"><h2 class="mb-24 text-9xl font-semibold tracking-tighter">Work</h2></div>
      <div data-scene data-speed="1.0" class="min-h-screen p-24"><h2 class="mb-24 text-9xl font-semibold tracking-tighter">Education</h2></div>
      <div data-scene data-speed="1.0" class="min-h-screen p-24"><h2 class="mb-24 text-9xl font-semibold tracking-tighter">Skills</h2></div>
      <div data-scene data-speed="1.0" class="min-h-screen p-24"><h2 class="mb-24 text-9xl font-semibold tracking-tighter">Languages</h2></div>
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