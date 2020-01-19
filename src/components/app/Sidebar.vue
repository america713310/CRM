<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" :exact="link.exact" >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>


<script>
import localize from '@/filters/localize.filter'

export default {
    props: ['value'],
    data: () => ({
        links: [
            { title: localize('Menu_Bill'), url: '/', exact: true },
            { title: localize('Menu_History'), url: '/history' },
            { title: localize('Menu_Planning'), url: '/planning' },
            { title: localize('Menu_NewRecord'), url: '/record' },
            { title: localize('Menu_Categories'), url: '/categories' },
            
        ]
    })
}
</script>