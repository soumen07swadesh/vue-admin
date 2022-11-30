<template>
  <SidebarSection />
  <HeaderSection />
  <DashboardSection />
  <FooterSection />
</template>


<script>
import SidebarSection from "@/components/SidebarSection";
import HeaderSection from "@/components/HeaderSection";
import DashboardSection from "@/components/DashboardSection";
import FooterSection from "@/components/FooterSection";

export default {
  name: 'HomeSection',
  components: {
    SidebarSection,
    HeaderSection,
    DashboardSection,
    FooterSection,
  },
  mounted() {
    let user=localStorage.getItem('user-info');
    if(!user){
      this.$router.push({name:'RegSection'})

    }
  }
}
</script>