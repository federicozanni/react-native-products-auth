interface MenLat {
  name: string,
  component: string | any,
  icon: string,
}

export const MenuLat: MenLat[] = [
  {
    name: 'Home',
    component: 'ProductsScreen',
    icon: 'home-outline',
  },

  {
    name: 'Publications',
    component: 'ProductsByUserScreen',
    icon: 'compass-outline',
  },
]




