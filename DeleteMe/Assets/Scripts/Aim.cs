using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Aim : MonoBehaviour
{
    private Vector2 screenPosition;
    private Vector2 worldPosition;
    private SpriteRenderer renderer;
    void Start()
    {
        renderer = transform.GetChild(0).GetComponent<SpriteRenderer>();
        renderer.sortingOrder = 4;
    }

    void Update()
    {
        screenPosition = new Vector2(
            Input.mousePosition.x, 
            Input.mousePosition.y);
        worldPosition = Camera.main.ScreenToWorldPoint(screenPosition);
        transform.right = new Vector3(worldPosition.x,
            worldPosition.y, 0) - transform.position;

        if(transform.rotation.z > -0.7f)
        {
            renderer.flipY = false;
        }
        else
        {
            renderer.flipY = true;
        }

        if(transform.parent.GetComponent<PlayerMovement>().moveV > 0)
        {
            renderer.sortingOrder = 4;
        }
        else if (transform.parent.GetComponent<PlayerMovement>().moveV < 0 ||
         transform.parent.GetComponent<PlayerMovement>().moveV != 0)
        {
            renderer.sortingOrder = 6;
        }
    }

}
