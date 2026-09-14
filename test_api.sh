#!/usr/bin/env bash

# Test script for Assignment 3 Backend Endpoints
BASE_URL="http://localhost:5000"

echo "=========================================================="
echo "      CS1303 Assignment 3 - Backend API Test Suite        "
echo "=========================================================="
echo ""

# 1. Health Check
echo ">> [Test 1] Health Check: GET ${BASE_URL}/"
curl -s -i "${BASE_URL}/" | head -n 12
echo -e "\n----------------------------------------------------------\n"

# 2. List All Projects
echo ">> [Test 2] List All Projects: GET ${BASE_URL}/api/projects"
curl -s -i "${BASE_URL}/api/projects" | head -n 18
echo -e "\n----------------------------------------------------------\n"

# 3. Single Project - Valid ID
echo ">> [Test 3] Single Project (Valid ID): GET ${BASE_URL}/api/projects/nsra"
curl -s -i "${BASE_URL}/api/projects/nsra" | head -n 18
echo -e "\n----------------------------------------------------------\n"

# 4. Single Project - 404 Not Found
echo ">> [Test 4] Single Project (Invalid ID - 404): GET ${BASE_URL}/api/projects/unknown-proj"
curl -s -i "${BASE_URL}/api/projects/unknown-proj"
echo -e "\n----------------------------------------------------------\n"

# 5. Submit Contact - Valid Data
echo ">> [Test 5] Submit Contact (Valid 201): POST ${BASE_URL}/api/contact"
curl -s -i -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name": "test", "email": "test@test.com", "message": "test"}'
echo -e "\n----------------------------------------------------------\n"

# 6. Submit Contact - Missing Field (400)
echo ">> [Test 6] Submit Contact (Missing Email - 400): POST ${BASE_URL}/api/contact"
curl -s -i -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name": "test", "email": "", "message": "test"}'
echo -e "\n----------------------------------------------------------\n"

# 7. Submit Contact - Invalid Email Format (400)
echo ">> [Test 7] Submit Contact (Invalid Email Format - 400): POST ${BASE_URL}/api/contact"
curl -s -i -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name": "test", "email": "test", "message": "test"}'
echo -e "\n----------------------------------------------------------\n"

# 8. List Contact Submissions (Verification)
echo ">> [Test 8] List All Submissions: GET ${BASE_URL}/api/contact"
curl -s -i "${BASE_URL}/api/contact"
echo -e "\n----------------------------------------------------------\n"

# 9. Undefined Route 404 Catch-All
echo ">> [Test 9] Undefined Route Catch-All (404): GET ${BASE_URL}/api/doesnotexist"
curl -s -i "${BASE_URL}/api/doesnotexist"
echo -e "\n==========================================================\n"
echo "API Test Suite Completed Successfully."
