import Swal from 'sweetalert2'

const sweetModalOne = () => {
    Swal.fire({
  title: 'exist!',
  text: 'book already exist on read list',
  icon: 'error',
  confirmButtonText: 'close'
})
}

const sweetModalTwo = () => {
 Swal.fire({
  title: 'exist!',
  text: 'book already exist on wish list',
  icon: 'error',
  confirmButtonText: 'close'
})
}

export {sweetModalOne, sweetModalTwo};