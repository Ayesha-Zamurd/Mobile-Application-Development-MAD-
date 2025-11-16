import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Animated,
  RefreshControl,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Easing,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const MovieScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  // Animation values
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(50))[0];
  const bounceAnim = useState(new Animated.Value(0))[0];
  const rotateAnim = useState(new Animated.Value(0))[0];
  const pulseAnim = useState(new Animated.Value(1))[0];

  // Gradient colors for backgrounds
  const gradients = [
    ['#667eea', '#764ba2'],
    ['#f093fb', '#f5576c'],
    ['#4facfe', '#00f2fe'],
    ['#43e97b', '#38f9d7'],
    ['#fa709a', '#fee140'],
    ['#a8edea', '#fed6e3'],
  ];

  const fetchMovies = async (isRefresh = false) => {
    try {
      if (!isRefresh) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }
      setError(null);

      // Start pulse animation during loading
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 800,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
        ])
      ).start();

      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      
      setMovies(json.movies);
      
      // Stop pulse animation
      pulseAnim.stopAnimation();
      
      // Complex entrance animations
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(bounceAnim, {
          toValue: 1,
          friction: 4,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    } catch (err) {
      setError('Failed to load movies. Please try again.');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const onRefresh = () => {
    fetchMovies(true);
  };

  const getGradientColors = (index) => {
    return gradients[index % gradients.length];
  };

  const getMovieEmoji = (title) => {
    const emojis = ['🎬', '🎭', '🌟', '🎪', '🎫', '📽️', '🍿', '🎞️', '✨', '🔥'];
    return emojis[title.length % emojis.length];
  };

  const renderMovieItem = ({ item, index }) => {
    const colors = getGradientColors(index);
    const itemSlideAnim = slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, index * 20],
    });
    
    const rotateInterpolate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['-5deg', '0deg'],
    });

    return (
      <Animated.View
        style={[
          styles.movieCard,
          {
            opacity: fadeAnim,
            transform: [
              { translateY: itemSlideAnim },
              { scale: bounceAnim },
              { rotate: rotateInterpolate },
            ],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.cardTouchable}
          onPress={() => setSelectedMovie(selectedMovie?.id === item.id ? null : item)}
          activeOpacity={0.8}
        >
          {/* Background Gradient */}
          <Animated.View 
            style={[
              styles.gradientBackground,
              {
                backgroundColor: colors[0],
                transform: [{ scale: pulseAnim }]
              }
            ]}
          />
          
          {/* Content */}
          <View style={styles.cardContent}>
            <View style={styles.emojiContainer}>
              <Text style={styles.emoji}>
                {getMovieEmoji(item.title)}
              </Text>
            </View>
            
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle} numberOfLines={2}>
                {item.title}
              </Text>
              
              <View style={styles.yearBadge}>
                <Text style={styles.releaseYear}>
                  {item.releaseYear}
                </Text>
              </View>
            </View>

            <Animated.View 
              style={[
                styles.chevron,
                {
                  transform: [
                    { 
                      rotate: selectedMovie?.id === item.id ? 
                        bounceAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '180deg']
                        }) : '0deg'
                    }
                  ]
                }
              ]}
            >
              <Text style={styles.chevronText}>▼</Text>
            </Animated.View>
          </View>

          {/* Animated Details Panel */}
          {selectedMovie?.id === item.id && (
            <Animated.View 
              style={[
                styles.movieDetails,
                {
                  opacity: fadeAnim,
                  transform: [
                    { 
                      scale: bounceAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1]
                      })
                    }
                  ]
                }
              ]}
            >
              <View style={styles.detailContent}>
                <View style={styles.detailRow}>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Released</Text>
                    <Text style={styles.detailValue}>{item.releaseYear}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Duration</Text>
                    <Text style={styles.detailValue}>120min</Text>
                  </View>
                </View>
                
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>⭐ 8.5/10</Text>
                </View>
                
                <Text style={styles.movieDescription}>
                  Experience the magic of cinema with "{item.title}". 
                  A masterpiece that captivated audiences in {item.releaseYear}.
                </Text>
                
                <TouchableOpacity style={styles.watchButton}>
                  <Text style={styles.watchButtonText}>🎬 Watch Trailer</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#667eea" />
        <Animated.View 
          style={[
            styles.loadingContent,
            {
              transform: [{ scale: pulseAnim }]
            }
          ]}
        >
          <View style={styles.loadingEmojiContainer}>
            <Text style={styles.loadingEmoji}>🎬</Text>
          </View>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text style={styles.loadingText}>Loading Cinema Magic</Text>
          <Text style={styles.loadingSubtext}>Preparing your movie experience...</Text>
        </Animated.View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#f5576c" />
        <Animated.View 
          style={[
            styles.errorContent,
            {
              transform: [{ scale: bounceAnim }]
            }
          ]}
        >
          <Text style={styles.errorEmoji}>😔</Text>
          <Text style={styles.errorTitle}>Connection Lost</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={fetchMovies}
          >
            <Text style={styles.retryButtonText}>🔄 Retry</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      
      {/* Animated Header */}
      <Animated.View 
        style={[
          styles.header,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <View style={styles.headerBackground} />
        <Text style={styles.headerTitle}>🎭 Cinema Hub</Text>
        <Text style={styles.headerSubtitle}>
          {movies.length} Blockbuster{movies.length !== 1 ? 's' : ''} Waiting
        </Text>
      </Animated.View>

      {/* Movies List */}
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#FFFFFF']}
            tintColor="#FFFFFF"
            title="Loading new movies..."
            titleColor="#FFFFFF"
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    alignItems: 'center',
    padding: 30,
  },
  loadingEmojiContainer: {
    marginBottom: 30,
  },
  loadingEmoji: {
    fontSize: 60,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
  },
  loadingSubtext: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#f5576c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContent: {
    alignItems: 'center',
    padding: 30,
  },
  errorEmoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  errorText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  retryButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  header: {
    padding: 25,
    paddingBottom: 20,
    overflow: 'hidden',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#667eea',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  headerSubtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },
  listContent: {
    padding: 15,
    paddingTop: 10,
  },
  movieCard: {
    borderRadius: 25,
    marginHorizontal: 5,
    marginVertical: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  cardTouchable: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    minHeight: 100,
  },
  emojiContainer: {
    marginRight: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    padding: 12,
  },
  emoji: {
    fontSize: 24,
  },
  movieInfo: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 24,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  yearBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  releaseYear: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  chevron: {
    paddingLeft: 10,
  },
  chevronText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  movieDetails: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  detailContent: {
    padding: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  ratingContainer: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  movieDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
    marginBottom: 15,
    fontStyle: 'italic',
  },
  watchButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  watchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  separator: {
    height: 15,
  },
  footer: {
    height: 30,
  },
});

export default MovieScreen;