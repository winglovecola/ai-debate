function Footer() {
  return <footer className='bg-[#232f44] min-h-16 flex items-center'>
    <div className='flex justify-between w-full px-4'>
      <div className='text-[#cdd6d5] text-sm'>
        &copy; Kismet Numbers {new Date().getFullYear()}
      </div>
      <div className='text-[#cdd6d5] text-sm'>
        All rights reserved
      </div>
    </div>
  </footer>
}

export default Footer;