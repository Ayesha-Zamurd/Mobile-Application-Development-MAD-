import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff9f5',
  },
  
  // Header Styles
  header: {
    backgroundColor: '#ffb6c1',
    padding: 15,
    shadowColor: '#ff8fab',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d63384',
  },
  
  menuButton: {
    padding: 8,
    borderRadius: 20,
  },
  
  menuButtonText: {
    fontSize: 24,
    color: '#d63384',
  },
  
  // Bottom Navigation Styles
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffb6c1',
    paddingVertical: 10,
    shadowColor: '#ff8fab',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  
  bottomNavContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
  navButton: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
  },
  
  navButtonActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  
  navText: {
    fontSize: 12,
    color: '#d63384',
    fontWeight: '500',
  },
  
  // Sidebar Styles
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 280,
    backgroundColor: '#ffb6c1',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    padding: 20,
    zIndex: 1000,
  },
  
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  
  sidebarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d63384',
  },
  
  closeButton: {
    padding: 8,
  },
  
  closeButtonText: {
    fontSize: 24,
    color: '#d63384',
  },
  
  sidebarMenu: {
    gap: 15,
  },
  
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 15,
    gap: 12,
  },
  
  sidebarItemText: {
    fontSize: 16,
    color: '#d63384',
    fontWeight: '500',
  },
  
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  
  // Screen Container
  screenContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 80,
  },
  
  // Common Text Styles
  text: {
    color: '#333',
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d63384',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#e91e63',
    textAlign: 'center',
    marginBottom: 15,
  },
});