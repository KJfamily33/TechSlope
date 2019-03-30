<template>
  <v-data-table
  :headers="plans"
  :items="features"
  class="elevation-1"
  :disable-initial-sort="false"
  hide-actions
  >
  <template v-slot:items="props">
    <td>{{ props.item.name }}</td>
    <td class="text-xs-center">
      <v-checkbox v-if="(typeof props.item.baseU == 'boolean')" v-model="props.item.baseU" style="margin-left: 47%;" hide-details readonly :ripple="false"></v-checkbox>
      <span v-else>{{ props.item.baseU }}</span>
    </td>
    <td class="text-xs-center">
      <v-checkbox v-if="(typeof props.item.proU == 'boolean')" v-model="props.item.proU" style="margin-left: 47%;" hide-details readonly :ripple="false"></v-checkbox>
      <span v-else>{{ props.item.proU }}</span>
    </td>
    <td class="text-xs-center">
      <v-checkbox v-if="(typeof props.item.baseZ == 'boolean')" v-model="props.item.baseZ" style="margin-left: 47%;" hide-details readonly :ripple="false"></v-checkbox>
      <span v-else>{{ props.item.baseZ }}</span>
    </td>
    <td class="text-xs-center">
      <v-checkbox v-if="(typeof props.item.proZ == 'boolean')" v-model="props.item.proZ" style="margin-left: 47%;"" hide-details readonly :ripple="false"></v-checkbox>
      <span v-else>{{ props.item.proZ }}</span>
    </td>
    <td class="text-xs-center">
      <v-checkbox v-if="(typeof props.item.ente == 'boolean')" v-model="props.item.ente" style="margin-left: 47%;" hide-details readonly :ripple="false"></v-checkbox>
      <span v-else>{{ props.item.ente }}</span>
    </td>
  </template>
</v-data-table>
</template>

<script>
export default {
  data () {
    return {
      plans: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'name',
          class: "subheading black--text"
        },
        { text: 'Basic Use', value: 'baseU', sortable: false, align: 'center', class: "title black--text" },
        { text: 'Pro Use', value: 'proU', sortable: false, align: 'center', class: "title black--text" },
        { text: 'Basic Zoning', value: 'baseZ', sortable: false, align: 'center', class: "title black--text" },
        { text: 'Pro Zoning', value: 'proZ', sortable: false, align: 'center', class: "title black--text" },
        { text: 'Enterprise', value: 'ente', sortable: false, align: 'center', class: "title black--text" },
      ],
      features: [
        {
          name: 'Cost/Call',
          baseU: '.5¢',
          proU: '.8¢',
          baseZ: '.3¢',
          proZ: '.5¢',
          ente: '1¢'
        },
        {
          name: 'Use Suggestion',
          baseU: true,
          proU: true,
          baseZ: false,
          proZ: false,
          ente: true
        },
        {
          name: 'Use Details',
          baseU: false,
          proU: true,
          baseZ: false,
          proZ: false,
          ente: true
        },
        {
          name: 'Zoning Code',
          baseU: false,
          proU: false,
          baseZ: true,
          proZ: true,
          ente: true
        },
        {
          name: 'Zoning Details',
          baseU: false,
          proU: false,
          baseZ: false,
          proZ: true,
          ente: true
        },
        {
          name: 'JSON',
          baseU: true,
          proU: true,
          baseZ: true,
          proZ: true,
          ente: true
        },
      ]
    }
  }
}
</script>
