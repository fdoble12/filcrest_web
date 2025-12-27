import { supabase } from '@/lib/supabase';

export const getListings = async () => {
  const { data, error } = await supabase
    .from('property_listings')
    .select(`
      listing_id,
      title,
      location,
      price,
      bedrooms,
      bathrooms,
      floor_area,
      description,
      listing_type_id,
      property_photos:photos_id (
        urls
      )
    `)
    .eq('status_id', 1);

  if (error) throw error;

  return data.map(l => ({
    listing_id: l.listing_id,
    title: l.title,
    city: l.location,
    price: l.price,
    bedrooms: l.bedrooms,
    bathrooms: l.bathrooms,
    floor_area: l.floor_area,
    description: l.description,
    type: l.listing_type_id === 1 ? 'sale' : 'rent',

    // Always return array
    img: l.property_photos?.urls || []
  }));
};

export const getListingById = async (listingId) => {
  const { data, error } = await supabase
    .from('property_listings')
    .select('*')
    .eq('listing_id', listingId)
    .single();

  if (error) throw error;
  return data;
};
