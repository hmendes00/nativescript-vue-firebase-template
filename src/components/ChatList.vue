<template>
    <ListView for="item in messages" @itemTap="showMore">
        <v-template>
            <Label :text="item.text" />
        </v-template>

        <v-template if="$odd">
            <Label :text="item.text" color="red" />
        </v-template>
    </ListView>
</template>


<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      messages () {
        return this.$store.state.chatlist.messages;
      }
    },
    methods: mapActions([
      'showMore',
    ]),
    created() {
        this.$store.dispatch('showMore')
    }
  };
</script>
