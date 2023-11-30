import axios from 'axios';

export class ProductService {
  async searchProducts(productIDs: string[]) {
    console.log(productIDs);

    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/api/products/search',
      data: {
        productIDs,
      },
    });
    return response.data;
  }
}
