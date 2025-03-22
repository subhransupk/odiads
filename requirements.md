User Roles & Authentication
Signup via Clerk → Default role: "business"
Email verification required before login
Role-based redirection:
Business users → Redirect to Business Panel
Admins → Redirect to Admin Panel
Panels & Features
1️⃣ Business Panel (For Business Owners)
✅ Add & manage business listings (Admin approval required)
 ✅ View & manage reviews (can only report, not delete)
 ✅ Apply for subscriptions (1 month, 6 months, 1 year) → Offline payment
 ✅ Get a 3-month free trial before subscription
 ✅ View subscription status & renewal reminders
 ✅ Google Maps integration for business location
2️⃣ Admin Panel (For Admins)
✅ Approve or reject business listings before publishing
 ✅ Manage business users (approve, ban, etc.)
 ✅ Manage business listings (approve, reject, delete)
 ✅ Review reported reviews (businesses cannot delete reviews directly)
 ✅ Manually approve/deny subscription requests after offline payment
 ✅ Send automated email reminders when a subscription is about to expire
3️⃣ Public Website (For Visitors & Customers)
✅ View business listings & details without login
 ✅ Search & filter businesses
 ✅ See Google Maps location for each business
 ✅ Anyone can leave reviews
 ✅ Reviews include a 1-5 star rating system (⭐ 1 to ⭐⭐⭐⭐⭐ 5)
 ✅ No image uploads in reviews (text-only reviews)
 ✅ Each business gets a dedicated profile page (details, reviews, Google Maps)
Final Key Decisions
✔ No online payment for now → Businesses apply & pay offline
 ✔ Admin approval is required before a business listing goes live
 ✔ Businesses get a 3-month free trial before needing a paid subscription
 ✔ Businesses cannot delete reviews, only report them to admins
 ✔ Google Maps integration for business locations
 ✔ Each business gets a dedicated profile page
 ✔ Admins manually approve subscriptions after payment
 ✔ Automated email reminders for subscription expiry
Pages & Menus for Each Panel
🔹 Public Pages (No Login Required)
Page Name
Route
Description
Homepage
/
Shows featured businesses, categories, and search bar.
All Listings
/listings
Displays all businesses with filters and sorting.
Business Profile
/business/[id]
Individual business profile with reviews, Google Maps.
Leave a Review
/business/[id]/review
Form to submit a review (Anyone can review).
Login / Register
/auth
User authentication via Clerk.
Contact Us
/contact
Basic contact page with an inquiry form.


🔹 Business Panel (For Business Owners)
📍 URL: /business/dashboard
 📌 Role-based Access: Only "business" users
📜 Menu Items in Business Panel
Menu Item
Route
Description
Dashboard
/business/dashboard
Overview of business performance.
My Business Listings
/business/listings
View, add, edit, and delete business listings.
Add New Listing
/business/listings/add
Form to add a new business listing (requires Admin approval).
Reviews
/business/reviews
View all reviews on their business and report negative ones.
Subscription
/business/subscription
Apply for subscription (1 month, 6 months, 1 year).
Profile Settings
/business/profile
Update business profile, email, and password.
Logout
-
Logs out the user.


🛠 Process in Business Panel
Sign Up & Login:


User registers via Clerk → Email verification required.
Default role = "business".
If role = "business", redirect to /business/dashboard.
Adding a Business Listing:


Fill out details in /business/listings/add.
Submit → Status = "pending" (admin approval required).
Once approved, it becomes public on /listings.
Managing Listings:


Can view all their listings at /business/listings.
Can edit/delete listings.
Status ("pending", "approved", "rejected") is shown.
Managing Reviews:


View all reviews left on their business at /business/reviews.
Can report negative reviews but not delete them.
Subscription System:


User selects a plan at /business/subscription (1 month, 6 months, 1 year).
Pays offline (bank transfer, cash, etc.).
Admin manually approves subscription.
Expiry date is stored in Supabase.
Automated email reminders sent before expiry.

🔹 Admin Panel (For Admins)
📍 URL: /admin/dashboard
 📌 Role-based Access: Only "admin" users
📜 Menu Items in Admin Panel
Menu Item
Route
Description
Dashboard
/admin/dashboard
Overview of total businesses, active subscriptions, pending approvals.
Manage Business Listings
/admin/businesses
Approve, reject, or delete business listings.
Manage Users
/admin/users
View, approve, or ban business users.
Reported Reviews
/admin/reviews/reported
Manage & remove reported reviews.
Manage Subscriptions
/admin/subscriptions
Approve offline payments and manage expiration dates.
Settings
/admin/settings
Admin settings and platform configurations.
Logout
-
Logs out the admin.


🛠 Process in Admin Panel
Approving Business Listings:


Admin sees all pending listings at /admin/businesses.
Can approve or reject.
Once approved, business appears in /listings.
Managing Users:


View all registered business owners at /admin/users.
Can ban users if needed.
Handling Reported Reviews:


Reviews reported by business owners appear in /admin/reviews/reported.
Admin decides to delete or keep the review.
Approving Subscriptions (Offline Payments):


Business applies for a plan at /business/subscription.
Admin sees pending payments at /admin/subscriptions.
After verifying offline payment, admin approves the subscription.
Supabase updates the subscription expiration date.
Automated email reminders sent before expiry.

3️⃣ Database Schema (Supabase Tables)
Users Table (users)
Column Name
Type
Description
id
UUID
Unique user ID.
email
String
User's email (Clerk authentication).
role
String
"business" or "admin".
created_at
Timestamp
Signup date.


Business Listings Table (businesses)
Column Name
Type
Description
id
UUID
Unique business ID.
owner_id
UUID
References users.id.
name
String
Business name.
category
String
Business category.
location
String
Address.
google_maps_link
String
Google Maps embed link.
status
Enum
"pending", "approved", "rejected".
created_at
Timestamp
Date added.


Reviews Table (reviews)
Column Name
Type
Description
id
UUID
Unique review ID.
business_id
UUID
References businesses.id.
rating
Integer
1-5 stars.
text
Text
Review content.
reported
Boolean
Default false.
created_at
Timestamp
Date added.


Subscriptions Table (subscriptions)
Column Name
Type
Description
id
UUID
Unique subscription ID.
business_id
UUID
References businesses.id.
plan
Enum
"1-month", "6-months", "1-year".
expires_at
Timestamp
Expiry date.
status
Enum
"pending", "active", "expired".


4️⃣ Final Workflow Summary
User registers & verifies email (via Clerk).
Business owner logs in → Redirects to Business Panel.
Adds a business listing → Admin approves.
User applies for subscription → Pays offline → Admin approves.
Business becomes active → Shown on public listings.
Users leave reviews → Business can report bad reviews.
Admin manages users, businesses, subscriptions, and reviews.

