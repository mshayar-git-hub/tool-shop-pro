from rest_framework.permissions import BasePermission

from user.models import UserProfile

class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return(
            request.user.is_authenticated
            and request.user.is_superuser
        )

class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and hasattr(request.user , 'profile')
            and request.user.profile.role == UserProfile.STAFF 
        )

class IsCustomer(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and hasattr(request.user , 'profile')
            and request.user.profile.role == UserProfile.CUSTOMER 
        )