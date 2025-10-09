<script setup lang="ts">
import { ref } from "vue";
import { getContactAgent } from '@/api/agentFactory';
import type { ContactEntity } from "@superoffice/webapi";

// Initialize the ContactAgent, this mocks the SuperOffice WebAPI ContactAgent if its running in local dev environment
const contactAgent = getContactAgent();
const contactEntity = ref<ContactEntity | null>(null);

let message = ref(1);

const getContactEntityAsync = async (id: number) => {
    const entity = await contactAgent.getContactEntityAsync(id);
    const omitKeys = ['tableRight', 'fieldProperties']; // We remove TableRight and FieldProperties to avoid TMI in the presented table..

    contactEntity.value = Object.fromEntries(
        Object.entries(entity).filter(([key]) => !omitKeys.includes(key))
    ) as ContactEntity;
};

</script>

<template>
  <div class="superoffice">
    <header>
      <h1>This is a SuperOffice page for showing results from API requests</h1>
    </header>

     <section class="action-section">
        <input v-model="message" placeholder="ContactId to fetch" />
        <div class="button-wrapper">
            <button @click="getContactEntityAsync(message)">Get Contact Entity</button>
        </div>
    </section>


<section class="result-section" v-if="contactEntity">
  <label>Contact Info:</label>
  <table class="result-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in contactEntity" :key="key">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
      </tr>
    </tbody>
  </table>
</section>

  </div>
</template>


<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }


.result-table th,
.result-table td {
  padding: 0.75rem;
  border: 1px solid #444;
  text-align: left;
}

.result-table th {
  background-color: #3e3e3e;
  font-weight: bold;
}

}
</style>
