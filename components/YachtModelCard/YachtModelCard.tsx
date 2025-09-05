import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import type { YachtModelData } from '@/types/YachtModel';
import * as S from './YachtModelCard.styles';

interface YachtModelCardProps {
  model: YachtModelData;
  index: number;
  isLast: boolean;
  onImageClick: (images: string[], imageIndex: number) => void;
  modelRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}

const YachtModelCard: React.FC<YachtModelCardProps> = ({
  model,
  index,
  isLast,
  onImageClick,
  modelRefs
}) => {
  const modelRef = useRef(null);
  const isModelInView = useInView(modelRef, { 
    once: true, 
    margin: "-200px",
    amount: "some"
  });

  const labels: { [key: string]: string } = {
    length: 'Długość całkowita',
    beam: 'Szerokość',
    draft: 'Zanurzenie',
    displacement: 'Wyporność',
    engine: 'Silnik',
    fuel: 'Paliwo',
    water: 'Woda słodka',
    berths: 'Miejsca noclegowe'
  };

  return (
    <motion.div
      ref={modelRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isModelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut"
      }}
    >
      <S.ModelSection
        ref={(el: HTMLDivElement | null) => {
          modelRefs.current[model.name] = el;
        }}
        id={model.name.toLowerCase().replace(/\s+/g, '-')}
      >
        {/* Model Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isModelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <S.ModelHeader>
            <S.ModelTitle>{model.name}</S.ModelTitle>
            <S.ModelDescription>
              {model.description}
            </S.ModelDescription>
          </S.ModelHeader>
        </motion.div>

        <S.ModelContent>
          {/* Gallery Section */}
          {model.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isModelInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            >
              <S.ModelGallery>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <S.MainImage>
                    <Image
                      src={model.images[0]}
                      alt={`${model.name} - widok główny`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      onClick={() => onImageClick(model.images, 0)}
                      priority={index === 0}
                    />
                    {model.images.length > 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isModelInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                      >
                        <S.ImageCount>
                          +{model.images.length - 1} zdjęć
                        </S.ImageCount>
                      </motion.div>
                    )}
                  </S.MainImage>
                </motion.div>
                
                <S.ThumbnailGrid>
                  {model.images.slice(1, 5).map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isModelInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.2 + 0.2 + (imgIndex * 0.1) 
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <S.Thumbnail
                        onClick={() => onImageClick(model.images, imgIndex + 1)}
                      >
                        <Image
                          src={image}
                          alt={`${model.name} - zdjęcie ${imgIndex + 2}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 25vw, 15vw"
                        />
                      </S.Thumbnail>
                    </motion.div>
                  ))}
                  {model.images.length > 5 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isModelInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 0.2 
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <S.MoreImages
                        onClick={() => onImageClick(model.images, 5)}
                      >
                        +{model.images.length - 5}
                      </S.MoreImages>
                    </motion.div>
                  )}
                </S.ThumbnailGrid>
              </S.ModelGallery>
            </motion.div>
          )}

          {/* Specifications and Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isModelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          >
            <S.ModelDetails>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isModelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <S.SpecificationsCard>
                  <h4>Specyfikacja Techniczna</h4>
                  <S.SpecificationsList>
                    {Object.entries(model.specifications).map(([key, value], specIndex) => {
                      return value ? (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -15 }}
                          animate={isModelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.2 + 0.6 + (specIndex * 0.05) 
                          }}
                        >
                          <S.SpecItem>
                            <span>{labels[key] || key}:</span>
                            <strong>{value}</strong>
                          </S.SpecItem>
                        </motion.div>
                      ) : null;
                    })}
                  </S.SpecificationsList>
                </S.SpecificationsCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isModelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <S.FeaturesCard>
                  <h4>Kluczowe Cechy</h4>
                  <S.FeaturesList>
                    {model.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isModelInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.2 + 0.6 + (featureIndex * 0.1) 
                        }}
                        whileHover={{ scale: 1.05, x: 10 }}
                      >
                        <S.FeatureItem>
                          <S.FeatureIcon>✓</S.FeatureIcon>
                          {feature}
                        </S.FeatureItem>
                      </motion.div>
                    ))}
                  </S.FeaturesList>
                </S.FeaturesCard>
              </motion.div>
            </S.ModelDetails>
          </motion.div>
        </S.ModelContent>

        {/* Divider */}
        {!isLast && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isModelInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
          >
            <S.ModelDivider />
          </motion.div>
        )}
      </S.ModelSection>
    </motion.div>
  );
};

export default React.memo(YachtModelCard);
