// frontend/styles/GlobalStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GlobalStyles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#e7d6d6ff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  menuButton: {
    padding: 8,
  },
  menuLines: {
    width: 25,
    height: 3,
    backgroundColor: '#333',
    marginVertical: 2,
    borderRadius: 2,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    fontFamily:'MyCustomFont',
  },
  headerRight: {
    width: 40,
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  navIcon: {
    alignItems: 'center',
    padding: 8,
  },
  navIconText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  navIconActive: {
    color: '#e74c3c',
  },

  // Drawer Styles
  drawerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 60,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  drawerSubItem: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
    backgroundColor: '#fafafa',
  },
  drawerSubItemText: {
    fontSize: 14,
    color: '#666',
  },

  // Home Screen Styles
  homeContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  banner: {
    height: 200,
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 12,
    elevation: 4,
  },
  bannerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  categoriesContainer: {
    padding: 15,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 45) / 2,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
    resizeMode: 'cover', // ✅ Image ko cover karega circle ko
    overflow: 'hidden', // ✅ Extra parts hide karega
  },
  
 
  // Product Screen Styles
  productContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  subcategoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subcategoryCard: {
    width: (width - 45) / 2,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  subcategoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },

  // Product List Styles
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#f8f8f8',
  },
  productInfo: {
    padding: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#e74c3c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#2c3e50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Sale Badge
  saleBadge: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  saleText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

drawerItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', // Added this
  paddingVertical: 15,
  paddingHorizontal: 25,
  borderBottomWidth: 1,
  borderBottomColor: '#f8f8f8',
},
drawerItemText: {
  fontSize: 16,
  color: '#333',
  // marginLeft: 15, // Remove this if you have it
},
drawerSubItem: {
  paddingVertical: 12,
  paddingHorizontal: 50,
  borderBottomWidth: 1,
  borderBottomColor: '#f8f8f8',
  backgroundColor: '#fafafa',
},
drawerSubItemText: {
  fontSize: 14,
  color: '#666',
},

});