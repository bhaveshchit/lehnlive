import React from 'react';
import { Box, Typography, Button, styled, keyframes } from '@mui/material';
import { motion } from 'framer-motion';

// Styled Components
const shine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
});

const GlowButton = styled(Button)({
  background: 'linear-gradient(45deg, #FF6B6B 30%, #48DBFB 90%)',
  color: 'white',
  padding: '12px 36px',
  fontSize: '1.2rem',
  borderRadius: '50px',
  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(255, 107, 107, 0.6)',
    '&::after': {
      opacity: 1
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)',
    backgroundSize: '300% 300%',
    animation: `${shine} 3s infinite linear`,
    opacity: 0.7,
    transition: 'opacity 0.3s'
  }
});

// Main Component
const LehnLive = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, #0F0F1A 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      p: 3,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: 'float 10s infinite linear',
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" sx={{ mb: 2, letterSpacing: '3px' }}>
          COMING SOON
        </Typography>
        
        <GradientText variant="h1" sx={{ 
          fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
          fontWeight: 900,
          lineHeight: 1.1,
          mb: 3
        }}>
          LEHN.LIVE
        </GradientText>

        <Typography variant="h5" sx={{ 
          maxWidth: '600px',
          mx: 'auto',
          mb: 4,
          fontSize: { xs: '1.2rem', md: '1.5rem' }
        }}>
          The billionaire dog's virtual video empire. 
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
            {" "}Barketing™ meets innovation.
          </Box>
        </Typography>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GlowButton variant="contained">
            Notify Me on Launch
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ marginTop: '4rem' }}
        >
          <Box
            component="img"
            src="https://i.ibb.co/ZRSj4hWc/Whats-App-Image-2025-03-30-at-14-41-35-26874834-removebg-preview.png"
            alt="Lehn Billionaire Dog"
            sx={{
              width: { xs: '250px', md: '350px' },
              filter: 'drop-shadow(0 10px 30px rgba(72, 219, 251, 0.4))',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'rotate(-5deg)'
              }
            }}
          />
        </motion.div>

        <Typography variant="body1" sx={{ 
          mt: 4,
          opacity: 0.7,
          maxWidth: '500px',
          mx: 'auto'
        }}>
          Virtual appearances • Exclusive content • NFT integrations
        </Typography>
      </motion.div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </Box>
  );
};

export default LehnLive;