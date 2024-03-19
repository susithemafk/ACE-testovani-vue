<!-- <template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Responsive Component</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="item in items" :key="item.id" class="bg-gray-200 p-4 rounded-lg shadow">
                <h2 class="text-lg font-semibold mb-2">{{ item.title }}</h2>
                <p class="text-gray-700">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, title: "Item 1", description: "Description of Item 1" },
                { id: 2, title: "Item 2", description: "Description of Item 2" },
                { id: 3, title: "Item 3", description: "Description of Item 3" },
                { id: 4, title: "Item 4", description: "Description of Item 4" },
                { id: 5, title: "Item 5", description: "Description of Item 5" },
                { id: 6, title: "Item 6", description: "Description of Item 6" },
            ],
        }
    },
}
</script> -->

<template>
    <div>
      <h1>Responsive Component</h1>
      <div class="flex-container">
        <div v-for="item in items" :key="item.id" class="item">
          {{ item.text }}
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, text: 'Item 1' },
          { id: 2, text: 'Item 2' },
          { id: 3, text: 'Item 3' },
          { id: 4, text: 'Item 4' },
          { id: 5, text: 'Item 5' }
        ]
      };
    }
  };
  </script>

  <style scoped>
  /* Mobile layout */
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item {
    margin: 0.5rem;
  }

  /* Tablet layout */
  @media (min-width: 768px) {
    .item {
      flex: 0 0 calc(50% - 1rem);
    }
  }

  /* Desktop layout */
  @media (min-width: 1024px) {
    .item {
      flex: 0 0 calc(33.33% - 1rem);
    }
  }
  </style>
