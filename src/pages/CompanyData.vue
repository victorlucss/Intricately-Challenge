<template>
  <div>
    <modal-intricately title="Additional notes" :active="modalOpened" @close="closeModal()">
      <input-intricately type="textarea" v-model="notes" required="true" placeholder="e.g. Good Tech Company" fullwidth="true" />
    </modal-intricately>

    <card-intricately id="companyData">
      <div class="wrapper">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique pretium cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec quis est eu dui consequat aliquam.

        <input-intricately type="text"  required="true" label="Company name" placeholder="e.g. Your company name" />
        <input-intricately type="currency" min="150" required="true" label="Company spend" placeholder="e.g. $150,000" />
        <input-intricately type="currency" min="150" max="330" required="true" label="Company spend ability" placeholder="e.g. $150,000 - $330,000" />
        <input-intricately type="textarea" v-model="notes" required="true" label="Notes" placeholder="e.g. Good Tech Company" fullwidth="true" @click.native="openModal()" />
      </div>
    </card-intricately>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        modalOpened: false,
        notes: '',
      }
    },

    methods: {
      openModal(){
        this.modalOpened = true;
      },

      closeModal(){
        this.modalOpened = false;
      }
    }
    
  }
</script>