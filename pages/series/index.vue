<template>
  <div class="serial-page pt-20">
    <div class="container-sm">
      <div class="series-updated mb-30">
        <div class="title mb-25">
          <h2>سریال های به روزشده</h2>
        </div>
        <div class="grid grid-cols-8 gap-x-10 gap-y-30">
          <CardMovie
            v-for="item in seriesUpdated"
            :key="item.id"
            :movieInfo="item"
          />
        </div>
      </div>
      <div class="series-2021 mb-30">
        <div class="title mb-25">
          <h2>سریال های به روزشده</h2>
        </div>
        <div class="grid grid-cols-8 gap-x-10 gap-y-30">
          <CardMovie
            v-for="item in seriesUpdated"
            :key="item.id"
            :movieInfo="item"
          />
        </div>
      </div>
      <div class="series-irainan mb-20">
        <div class="title mb-25">
          <h2>سریال ایرانی</h2>
        </div>
        <div class="grid grid-cols-8 gap-x-10 gap-y-30">
          <CardMovie
            v-for="item in seriesUpdated"
            :key="item.id"
            :movieInfo="item"
          />
        </div>
      </div>
      <CoverMovie />
    </div>
  </div>
</template>

<script>
import './style.scss'
export default {
  layout: 'main',
  data() {
    return {
      seriesUpdated: [
        {
          id: 1,
          title: 'فردا',
          year: 2021,
          countries: [
            {
              id: 1,
              name: 'کره جنوبی',
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
            'https://static.cdn.asset.filimo.com/flmt/mov_111509_29034-m.jpg',
          hasSubtitle: true,
        },
        {
          id: 1,
          title: 'پاچینکو',
          year: 2021,
          countries: [
            {
              id: 1,
              name: 'کره جنوبی',
            },
            {
              id: 2,
              name: 'آمریکا',
            },
          ],
          categories: [
            {
              id: 1,
              name: 'عاشقانه',
            },
            {
              id: 2,
              name: 'خانوادگی',
            },
          ],
          hasSubtitle: true,
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_114028_32244-m.jpg',
        },
        {
          id: 1,
          title: 'توکیو وایس',
          year: 2022,
          countries: [
            {
              id: 2,
              name: 'آمریکا',
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
          hasSubtitle: true,
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_114066_32287-m.jpg',
        },
        {
          id: 1,
          title: 'پرسان هاردی',
          year: 2022,
          countries: [
            {
              id: 1,
              name: 'کانادا',
            },
          ],
          categories: [
            {
              id: 1,
              name: 'وحشت',
            },
            {
              id: 2,
              name: 'هیجان انگیز',
            },
          ],
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_114155_32418-m.jpg',
          hasSubtitle: false,
        },
        {
          id: 1,
          title: 'پاچینکو',
          year: 2021,
          countries: [
            {
              id: 1,
              name: 'ترکیه',
            },
          ],
          categories: [
            {
              id: 1,
              name: 'عاشقانه',
            },
            {
              id: 2,
              name: 'خانوادگی',
            },
          ],
          hasSubtitle: true,
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_109465_26553-m.jpg',
        },
        {
          id: 1,
          title: 'توکیو وایس',
          year: 2022,
          countries: [
            {
              id: 2,
              name: 'آمریکا',
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
          hasSubtitle: true,
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_114066_32287-m.jpg',
        },
        {
          id: 1,
          title: 'قیام عثمان',
          year: 2022,
          countries: [
            {
              id: 2,
              name: 'ترکیه',
            },
          ],
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
          hasSubtitle: true,
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_113282_31283-m.jpg',
        },
        {
          id: 1,
          title: 'قضاوت',
          year: 2022,
          countries: [
            {
              id: 2,
              name: 'ترکیه',
            },
          ],
          categories: [
            {
              id: 1,
              name: 'خانوادگی',
            },
            {
              id: 2,
              name: 'اجتماعی',
            },
          ],
          hasSubtitle: true,
          imgUrl:
            'https://static.cdn.asset.filimo.com/flmt/mov_109804_27010-m.jpg',
        },
      ],
    }
  },
}
</script>

<style>
</style>