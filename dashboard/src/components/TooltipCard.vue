<template>
  <v-card elevation=10>
    <v-list-item two-line>
      <v-list-item-content class="pb-2">
        <div class="text-overline font-weight-regular mb-1" style="line-height: 1rem; font-size: 0.625rem !important;">{{ station.name }}</div>
        <v-list-item-title class="mb-1">{{ station.city }} &middot; {{ station.given_name }}</v-list-item-title>
        <v-list-item-subtitle title="sponsor">
          <v-icon small>mdi-heart-outline</v-icon>
          {{ station.sponsor }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list subheader class="px-2">
      <v-row dense>
      <v-col cols="6" class="pa-0" v-for="p in weatherProperties" :key="p.property">
        <v-list-item dense class="px-2" style="min-height: 36px;">
            <v-list-item-subtitle :title="p.name"><v-icon class='pr-1'>{{ p.icon }}</v-icon> {{ measurements['status'] == "Offline" ? "-" : measurements[p.property] }} {{ p.unit }}</v-list-item-subtitle>
        </v-list-item>
      </v-col>
      </v-row>
    </v-list>

  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Station, Measurement } from '../app/types';
import { weatherProperties as wp } from '../app/weatherProperties';

@Component
export default class TooltipCard extends Vue {
  @Prop() station!: Station;

  weatherProperties = wp;

  get measurements (): Measurement | {} {
    return (this.$store.state.liveMeasurements as Measurement[]).find(m => m.id === this.station.id) || {};
  }
}
</script>
