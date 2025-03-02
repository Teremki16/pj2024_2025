using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyScript : MonoBehaviour
{
    public string playerTag = "Player"; // The tag of the player
    public string destroyPlateTag = "DestroyPlate"; // The tag of the plate that destroys
    private void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.CompareTag(playerTag))
        {
            Destroy(gameObject);
        }
        if (collider.CompareTag(destroyPlateTag))
        {
            Destroy(gameObject);
        }
    }
}
