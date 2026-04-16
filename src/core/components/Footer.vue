<template>
  <footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8 mt-20">
    <div class="max-w-6xl mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div class="col-span-1 md:col-span-1">
          <div class="text-2xl font-bold tracking-tighter text-[#F59E0B] mb-4 uppercase">PORTFOLIO</div>
          <p class="text-slate-400 text-sm leading-relaxed">
            Creating unique digital experiences through code and aesthetic thinking. Ready for any new challenge.
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">Discover</h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li><router-link to="/home" class="hover:text-[#F59E0B] transition-colors">Home</router-link></li>
            <li><a href="/projects" class="hover:text-[#F59E0B] transition-colors">Personal Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact</h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li class="flex items-center space-x-3">
              <span class="text-[#F59E0B]">📧</span>
              <span>dat.nguyen26@student.passerellesnumeriques.org</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-[#F59E0B]">📍</span>
              <span>Da Nang, Viet Nam</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center">
        <p class="text-slate-500 text-xs mb-4 md:mb-0">
          &copy; 2026 Designed by Nguyen Van Dat. Built with 
          <span class="text-[#F59E0B] font-medium">Vue.js & Tailwind CSS And Larvel PHP</span>.
        </p>
        <div class="flex space-x-6 text-xs text-slate-500">
          <a href="#" class="hover:text-white transition-colors">Quyền riêng tư</a>
          <a href="#" class="hover:text-white transition-colors">Điều khoản</a>
        </div>
      </div>
    </div>
  </footer>
</template>