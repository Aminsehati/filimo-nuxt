<template>
  <div class="cover-movie">
    <div class="cover-movie-inner">
      <div class="cover-movie-wrapper">
        <div class="image-cover-movie">
          <img
            src="https://static.cdn.asset.filimo.com/flmt/mov_103834_19097-m.jpg"
          />
        </div>
        <div class="cover-image-content">
          <h2 class="movie-name">
            {{ coverMovieInfo.title }}
          </h2>
          <div class="categories">
            <span
              v-for="catgeory in coverMovieInfo.categories"
              :key="catgeory.id"
            >
              {{ catgeory.name }}
            </span>
          </div>
          <div class="info-movie mt-15 mb-8">
            <div class="countries">
              <span
                v-for="country in coverMovieInfo.countries"
                :key="country.id"
                class="country-item"
              >
                {{ country.name }}
              </span>
            </div>
            <span class="mx-5 label"> - </span>
            <div class="year ml-5">
              {{ coverMovieInfo.year }}
            </div>
            <span class="ml-5 label"> - </span>
            <div class="isHD">کیفیت HD</div>
          </div>
          <div class="directors">
            <span> کارگردان : </span>
            <span> Choi Hang-Yong </span>
          </div>
          <p class="summary mt-8">
            این سریال بر روی پلتفرم نتفلیکس ارائه می شود. داستان «دریای خاموش»،
            درباره گروهی از فضانوردان است که در طول یک ماموریت بیست و چهار ساعته
            بر روی کره ماه، تلاش می کنند نمونه هایی را از یک مرکز تحقیقاتی سری
            بازیابند. ...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss'
export default {
  props: {
    coverMovieInfo: {
      type: Object,
      default: () => {
        return {
          title: 'دریای خاموش',
          categories: [
            {
              id: 1,
              name: 'اکشن',
            },
            {
              id: 2,
              name: 'ماجراجویی',
            },
          ],
          countries: [
            {
              id: 1,
              name: 'کره جنوبی',
            },
          ],
          year: 2021,
        }
      },
    },
  },
}
</script>

<style>
</style>