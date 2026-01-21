import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Stack,
  Grid,
  Divider
} from '@mui/material';
import { HealthAndSafety, LocalHospital } from '@mui/icons-material';
import { useRecipeContext } from '../context/RecipeContext';

const HealthProfile = () => {
  const { healthProfile, updateHealthProfile } = useRecipeContext();

  // Defensive check for healthProfile
  if (!healthProfile) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    updateHealthProfile({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <Box 
      sx={{ 
        mb: 4, 
        p: { xs: 3, md: 4 }, 
        borderRadius: 2,
        backgroundColor: 'background.paper',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Box
          sx={{
            p: 1.25,
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HealthAndSafety sx={{ fontSize: 24, color: 'white' }} />
        </Box>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          Health Profile
        </Typography>
      </Stack>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Daily Sodium Limit (mg)"
            name="dailySodiumMax"
            type="number"
            value={healthProfile?.dailySodiumMax || 1500}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 500, max: 3000 } }}
            helperText="Recommended: 1500-2300 mg per day"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              mb: 2,
              fontWeight: 600,
              color: 'text.secondary',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontSize: '0.75rem',
            }}
          >
            Medical Conditions
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="hasDiabetes"
                  checked={healthProfile?.hasDiabetes || false}
                  onChange={handleChange}
                  sx={{ 
                    '&.Mui-checked': {
                      color: 'primary.main',
                    }
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocalHospital sx={{ fontSize: 18, color: 'text.secondary' }} />
                  <Typography sx={{ fontWeight: 500, fontSize: '0.95rem' }}>
                    I have diabetes
                  </Typography>
                </Box>
              }
            />
            
            <FormControlLabel
              control={
                <Checkbox
                  name="hasRenalDisease"
                  checked={healthProfile?.hasRenalDisease || false}
                  onChange={handleChange}
                  sx={{ 
                    '&.Mui-checked': {
                      color: 'primary.main',
                    }
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <HealthAndSafety sx={{ fontSize: 18, color: 'text.secondary' }} />
                  <Typography sx={{ fontWeight: 500, fontSize: '0.95rem' }}>
                    I have kidney disease
                  </Typography>
                </Box>
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HealthProfile;