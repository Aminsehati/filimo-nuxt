<template>
  <div class="movie-card">
    <nuxt-link to="/">
      <div class="movie-card-wrapper">
        <div class="image-movie">
          <img :src="movieInfo.imgUrl" />
        </div>
        <div class="overlay-movie">
          <div class="overlay-movie-wrapper">
            <div class="categories mb-5">
              <template v-for="(category, index) in movieInfo.categories">
                <div :key="index" class="category-item">
                  <span>
                    {{ category.name }}
                  </span>
                  <span class="label">
                    {{ movieInfo.categories.length > index + 1 ? '-' : '' }}
                  </span>
                </div>
              </template>
            </div>
            <div class="info-movie">
              <span class="year ml-3">
                {{ movieInfo.year }}
              </span>
              <span class="ml-3"> - </span>
              <div class="countries ml-3">
                <template v-for="(country, index) in movieInfo.countries">
                  <div :key="index" class="country-item">
                    <span>
                      {{ country.name }}
                    </span>
                    <span
                      v-if="movieInfo.countries.length > index + 1"
                      class="label"
                    >
                      {{ movieInfo.countries.length > index + 1 ? '-' : '' }}
                    </span>
                  </div>
                </template>
              </div>
              <span class="ml-4 label"> - </span>
              <div v-if="movieInfo.hasSubtitle" class="subtitle">
                <span> زیرنویس دارد </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="movie-overlay1"
          :style="styleMovieInfo(movieInfo.imgUrl)"
        ></div>
        <div
          class="movie-overlay2"
          :style="styleMovieInfo(movieInfo.imgUrl)"
        ></div>
      </div>
      <span class="name_movie">
        {{ movieInfo.title }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
import './style.scss'
export default {
  props: {
    movieInfo: {
      type: Object,
      default: () => {
        return {
          year: 2020,
          countries: [
            {
              id: 1,
              name: 'آلمان',
            },
            {
              id: 2,
              name: 'فنلاند',
            },
          ],
          categories: [
            {
              id: 1,
              name: 'اکشن',
            },
            {
              id: 2,
              name: 'هیجان انگیز',
            },
          ],
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_105543_21480-m.jpg',
        }
      },
    },
  },
  methods: {
    styleMovieInfo(url) {
      return {
        backgroundImage: `url(${url})`,
      }
    },
  },
}
</script>

<style>
</style>