<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Privus"/>

    <StackLayout>
      <ChatList></ChatList>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
    </StackLayout>

  </Page>
</template>

<script>
  import ChatList from './ChatList'

  export default {
    components: {
      ChatList
    }
  };
</script>
