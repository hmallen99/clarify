# coding=utf-8
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Tests of image-FEC models."""

from absl.testing import absltest
from trax import layers as tl
from trax.shapes import ShapeDtype

from clarify.research.image_fec.models import ImageFEC


# Duplicate and diverge
class ImageFECTest(absltest.TestCase):

  def test_image_fec(self):
    input_signature = ShapeDtype((3, 256, 256, 3))
    model = ImageFEC(d_hidden=8, n_output_classes=10)
    final_shape = tl.check_shape_agreement(model, input_signature)
    self.assertEqual((3, 10), final_shape)


if __name__ == '__main__':
  absltest.main()