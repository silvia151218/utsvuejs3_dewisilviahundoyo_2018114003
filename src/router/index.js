import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/absen/Home.vue'
import Createabsen from '../views/absen/Createabsen.vue'
import Kontrak from '../views/kontrakmatakuliah/Kontrak.vue'
import Createkontrakmatakuliah from '../views/kontrakmatakuliah/Createkontrak.vue'
import Editkontrakmatakuliah from '../views/kontrakmatakuliah/Editkontrak.vue'
import Matkul from '../views/matkul/index.vue'
import Creatematakuliahs from '../views/matkul/Creatematakuliah.vue'
import Index from '../views/mahasiswa/index.vue'
import Createmahasiswa from '../views/mahasiswa/Createmahasiswa.vue'
import Editmahasiswa from '../views/mahasiswa/Editmahasiswa.vue'
import Jadwal from '../views/jadwal/Jadwal.vue'
import Createjadwal from '../views/jadwal/Createjadwal.vue'
import Editjadwal from '../views/jadwal/Editjadwal.vue'
import Editmatakuliah from '../views/matkul/Editmatakuliah.vue'
import Smt from '../views/semester/Smt.vue'
import Createsemester from '../views/semester/Createsmt.vue'
import Editsemester from '../views/semester/Editsmt.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/createabsen',
      name: 'Createabsen',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Createabsen
      },
      {
        path:'/jadwal',
        name: 'Jadwal',
        component: Jadwal
      },
      {
        path: '/createjadwal',
        name: 'Createjadwal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createjadwal
      },
      {
        path: '/editjadwal/:id',
        name: 'Editjadwal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editjadwal
      },
      {
        path: '/mahasiswa',
        name: 'Index',
        component: Index
      },
      {
        path: '/createmahasiswa',
        name: 'Createmahasiswa',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createmahasiswa
      },
      {
        path: '/editmahasiswa/:id',
        name: 'Editmahasiswa',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editmahasiswa
      },
      {
        path: '/Kontrakmatakuliah',
        name: 'Kontrak',
        component: Kontrak
      },
      {
        path: '/createkontrakmatakuliah',
        name: 'Createkontrakmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createkontrakmatakuliah
      },
      {
        path: '/editkontrakmatakuliah/:id',
        name: 'Editkontrakmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editkontrakmatakuliah
      },
      {
        path: '/matakuliah',
        name: 'Matkul',
        
        component: Matkul
      },
      {
        path: '/creatematakuliah',
        name: 'Creatematakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Creatematakuliahs
      },
      {
        path: '/editmatakuliah/:id',
        name: 'Editmatakuliah',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editmatakuliah
      },
      {
        path: '/semester',
        name: 'Smt',
        component: Smt
      },
      {
        path: '/createsemester',
        name: 'Createsemester',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Createsemester
      },
      {
        path: '/editsemester/:id',
        name: 'Editsemester',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Editsemester
      }
    ]

    const router = createRouter({
        history: createWebHashHistory(),
        routes
      })

    export default router