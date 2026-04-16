<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
    <div class="bg-gray-800 text-white px-2 text-sm rounded rotate-12 absolute mb-20">
      Trang không tồn tại
    </div>
    <div class="mt-8">
      <p class="text-2xl font-semibold text-gray-700 md:text-3xl">Xin lỗi, chúng tôi không tìm thấy trang này.</p>
      <p class="mt-4 text-gray-500">Đừng lo lắng, bạn có thể quay lại trang chủ để tiếp tục.</p>
      
      <router-link 
        to="/home" 
        class="inline-block mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
      >
        Về trang chủ
      </router-link>
    </div>
  </div>
</template>